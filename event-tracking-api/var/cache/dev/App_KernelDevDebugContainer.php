<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerREI6QXe\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerREI6QXe/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerREI6QXe.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerREI6QXe\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerREI6QXe\App_KernelDevDebugContainer([
    'container.build_hash' => 'REI6QXe',
    'container.build_id' => '77543340',
    'container.build_time' => 1722754339,
    'container.runtime_mode' => \in_array(\PHP_SAPI, ['cli', 'phpdbg', 'embed'], true) ? 'web=0' : 'web=1',
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerREI6QXe');
