<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PublicGameModule extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'game',
        'game_module_name',
        'global_note',
        'npc_data',
        'author_id',
        'author_name',
        'downloaded',
        'taked_by',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'global_note' => 'array',
        'npc_data' => 'array',
        'taked_by' =>'array',
    ];

    public function publicGameModuleDatas()
    {
        return $this->hasMany(PublicGameModuleData::class, 'public_game_module_id');
    }
}
