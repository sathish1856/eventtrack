<?php
namespace App\Controller;

use App\Entity\Event;
use App\Repository\EventRepository;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class EventController extends AbstractController
{
    #[Route('/events', name: 'create_event', methods: ['POST'])]
    public function createEvent(Request $request, EntityManagerInterface $entityManager, UserRepository $userRepository): JsonResponse
    {
        $content = json_decode($request->getContent(), true);

        $timestamp = $content['timestamp'] ?? null;
        $ipaddress = $content['ipaddress'] ?? null;
        $useragent = $content['useragent'] ?? null;
        $eventValues = $content['event_values'] ?? null;
        $userId = $content['userid'] ?? null;

        if (!$timestamp || !$ipaddress || !$useragent || !$eventValues || !$userId) {
            return $this->json(['message' => 'Invalid data'], 400);
        }

        $user = $userRepository->find($userId);

        if (!$user) {
            return $this->json(['message' => 'User not found'], 404);
        }

        $event = new Event();
        $event->setTimestamp(new \DateTime($timestamp));
        $event->setIpaddress($ipaddress);
        $event->setUseragent($useragent);
        $event->setEventValues($eventValues);
        $event->setUser($user);

        $entityManager->persist($event);
        $entityManager->flush();

        return $this->json(['message' => 'Event created']);
    }

    #[Route('/events', name: 'get_events', methods: ['GET'])]
    public function getEvents(EventRepository $eventRepository): JsonResponse
    {
        $events = $eventRepository->findAll();

        $eventResponses = array_map(function ($event) {
            return [
                'id' => $event->getId(),
                'timestamp' => $event->getTimestamp()->format('Y-m-d H:i:s'),
                'ipaddress' => $event->getIpaddress(),
                'useragent' => $event->getUseragent(),
                'event_values' => $event->getEventValues(),
                'userid' => $event->getUser()->getId()
            ];
        }, $events);

        return $this->json($eventResponses);
    }
}
