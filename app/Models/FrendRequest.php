<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FrendRequest extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'from_user',
        'to_user',
        'message',
        'accepted',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'accepted' => 'boolean',
    ];

    public function sender() {
        return $this->belongsTo(User::class, 'from_user');
    }

    public function reciver() {
        return $this->belongsTo(User::class, 'to_user');
    }
}
