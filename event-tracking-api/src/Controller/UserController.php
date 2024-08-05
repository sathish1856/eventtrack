<?php
 
 namespace App\Controller;

 use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
 use Symfony\Component\HttpFoundation\JsonResponse;
 use Symfony\Component\HttpFoundation\Request;
 use App\Repository\UserRepository;
 use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
 use Symfony\Component\Routing\Annotation\Route;
 
 #[Route('/api', name: 'api_')]
 class UserController extends AbstractController
 {
     #[Route('/login', name: 'app_login', methods: ['POST'])]
     public function login(Request $request, UserRepository $userRepository, UserPasswordHasherInterface $passwordHasher): JsonResponse
     {
         $content = json_decode($request->getContent(), true);
         $id = $content['id'] ?? null;
         $password = $content['password'] ?? null;
 
         if (!$id || !$password) {
            return $this->json(['error' => 'Missing credentials'], JsonResponse::HTTP_UNAUTHORIZED);
        }

         $user = $userRepository->findOneBy(['id' => $id]);

         if (!$user) {
            return $this->json(['error' => 'Invalid user ID'], JsonResponse::HTTP_UNAUTHORIZED);
        }


        if ($user->getPassword() !== $password) {
            return $this->json(['error' => 'Invalid password'], JsonResponse::HTTP_UNAUTHORIZED);
        }
        
         // Generate a random token
         $token = bin2hex(random_bytes(32));
 
         // Create a response array with the token and user role
         $response = [
             'token' => $token,
             'role' => $user->getRoles()[0]
         ];
 
         return $this->json($response);
     }
 } 