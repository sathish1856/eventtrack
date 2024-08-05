<?php

namespace App\Entity;

use App\Repository\EventRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: EventRepository::class)]
class Event
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 30)]
    private ?string $ipaddress = null;

    #[ORM\Column(length: 250)]
    private ?string $useragent = null;

    #[ORM\Column(type: Types::TIME_MUTABLE)]
    private ?\DateTimeInterface $timestamp = null;

    #[ORM\Column(length: 250, nullable: true)]
    private ?string $event_values = null;

    #[ORM\ManyToOne(targetEntity: User::class)]
    #[ORM\JoinColumn(nullable: false)]
    private ?User $user = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIpaddress(): ?string
    {
        return $this->ipaddress;
    }

    public function setIpaddress(string $ipaddress): static
    {
        $this->ipaddress = $ipaddress;

        return $this;
    }

    public function getUseragent(): ?string
    {
        return $this->useragent;
    }

    public function setUseragent(string $useragent): static
    {
        $this->useragent = $useragent;

        return $this;
    }

    public function getTimestamp(): ?\DateTimeInterface
    {
        return $this->timestamp;
    }

    public function setTimestamp(\DateTimeInterface $timestamp): static
    {
        $this->timestamp = $timestamp;

        return $this;
    }

    public function getEventValues(): ?string
    {
        return $this->event_values;
    }

    public function setEventValues(?string $event_values): static
    {
        $this->event_values = $event_values;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    // Setter for $user
    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

}
