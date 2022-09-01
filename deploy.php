<?php
namespace Deployer;

require 'recipe/laravel.php';

// Project name
set('application', 'prg_app');

// Project repository
set('repository', 'https://github.com/Augusztinovics/rpg_game_app.git');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true);

// Shared files/dirs between deploys
add('shared_files', []);
add('shared_dirs', []);

// Writable dirs by web server
add('writable_dirs', []);
set('allow_anonymous_stats', false);

// Hosts

host('rpg-app.wdev.rs')
    ->set('remote_user', 'deploy_rpg')
    ->set('deploy_path', '/var/www/vhosts/rpg-app.wdev.rs')
    ->set('keep_releases', '2');

// Tasks

task('build', function () {
    run('cd {{release_path}} && build');
});

// [Optional] if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');

// Migrate database before symlink new release.

before('deploy:symlink', 'artisan:migrate');

task('reload:php-fpm', function () {
    run('sudo /usr/sbin/service php8.0-fpm reload');
});

task('npm:install', function () {
    run('cd {{release_path}} && npm ci');
});

task('express:start', function () {
    try {
        run('cd {{release_path}} && pm2 delete all');
    }
    catch (\Deployer\Exception\Exception $e) {
        writeln("no process to delete");
    }

    run('cd {{release_path}} && pm2 start server.js');
});

before('deploy:symlink', 'npm:install');

after('npm:install', 'express:start');

after('deploy', 'reload:php-fpm');
