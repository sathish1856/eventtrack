<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/events' => [
            [['_route' => 'create_event', '_controller' => 'App\\Controller\\EventController::createEvent'], null, ['POST' => 0], null, false, false, null],
            [['_route' => 'get_events', '_controller' => 'App\\Controller\\EventController::getEvents'], null, ['GET' => 0], null, false, false, null],
        ],
        '/api/projects' => [
            [['_route' => 'api_project_index', '_controller' => 'App\\Controller\\ProjectController::index'], null, ['GET' => 0], null, false, false, null],
            [['_route' => 'api_project_create', '_controller' => 'App\\Controller\\ProjectController::create'], null, ['POST' => 0], null, false, false, null],
        ],
        '/api/login' => [[['_route' => 'api_app_login', '_controller' => 'App\\Controller\\UserController::login'], null, ['POST' => 0], null, false, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/_error/(\\d+)(?:\\.([^/]++))?(*:35)'
                .'|/api/projects/([^/]++)(?'
                    .'|(*:67)'
                .')'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        35 => [[['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        67 => [
            [['_route' => 'api_project_show', '_controller' => 'App\\Controller\\ProjectController::show'], ['id'], ['GET' => 0], null, false, true, null],
            [['_route' => 'api_project_update', '_controller' => 'App\\Controller\\ProjectController::update'], ['id'], ['PUT' => 0, 'PATCH' => 1], null, false, true, null],
            [['_route' => 'api_project_delete', '_controller' => 'App\\Controller\\ProjectController::delete'], ['id'], ['DELETE' => 0], null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
