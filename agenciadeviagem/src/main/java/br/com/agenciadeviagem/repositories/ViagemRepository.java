package br.com.agenciadeviagem.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.agenciadeviagem.entities.Viagem;

@Repository
public interface ViagemRepository extends JpaRepository<Viagem, Long> {

}
