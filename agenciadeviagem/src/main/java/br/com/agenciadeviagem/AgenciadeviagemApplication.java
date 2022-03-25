package br.com.agenciadeviagem;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import br.com.agenciadeviagem.entities.Cliente;
import br.com.agenciadeviagem.entities.Viagem;
import br.com.agenciadeviagem.repositories.ClienteRepository;
import br.com.agenciadeviagem.repositories.ViagemRepository;

@SpringBootApplication
public class AgenciadeviagemApplication implements CommandLineRunner{

	@Autowired
	private ClienteRepository clienteRepository;
	
	@Autowired
	private ViagemRepository viagemRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(AgenciadeviagemApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		
		Cliente c1 = new Cliente(null, "Anderson Melo", "888.888.888-88", "andersonmelo@google.com", "(81)9.8888-8888", "23/07/1993", "Rua dos Bobos, número Zero");
		Cliente c2 = new Cliente(null, "Alesson Melo", "999.999.999-99", "alessonmelo@google.com", "(81)9.9999.9999", "05/09/1995", "Rua dos Bobos, número Zero");
		
		clienteRepository.save(c1);
		clienteRepository.save(c2);
		
		Viagem v1 = new Viagem (null, "Recife", "Gramado", "07/10/2022", "10/10/2022", 597.90);
		Viagem v2 = new Viagem (null, "Recife", "Lisboa", "27/12/2022", "N/A", 3497.90);
		
		viagemRepository.save(v1);
		viagemRepository.save(v2);
		
	}

}
