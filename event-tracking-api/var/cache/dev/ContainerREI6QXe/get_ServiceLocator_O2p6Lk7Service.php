<?php

namespace ContainerREI6QXe;


use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_ServiceLocator_O2p6Lk7Service extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.O2p6Lk7' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.O2p6Lk7'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService ??= $container->getService(...), [
            'router' => ['services', 'router', 'getRouterService', false],
            'request_stack' => ['services', 'request_stack', 'getRequestStackService', false],
            'http_kernel' => ['services', 'http_kernel', 'getHttpKernelService', false],
            'security.authorization_checker' => ['privates', 'security.authorization_checker', 'getSecurity_AuthorizationCheckerService', false],
            'security.token_storage' => ['privates', 'security.token_storage', 'getSecurity_TokenStorageService', false],
            'security.csrf.token_manager' => ['privates', 'security.csrf.token_manager', 'getSecurity_Csrf_TokenManagerService', true],
            'parameter_bag' => ['privates', 'parameter_bag', 'getParameterBagService', false],
        ], [
            'router' => '?',
            'request_stack' => '?',
            'http_kernel' => '?',
            'security.authorization_checker' => '?',
            'security.token_storage' => '?',
            'security.csrf.token_manager' => '?',
            'parameter_bag' => '?',
        ]);
    }
}
