// Local onde sua API está rodando
const API_URL = 'http://localhost:3333/users';
const usersList = document.getElementById('users-list');

async function fetchUsers() {
    console.log(`[Frontend] Tentando buscar dados de: ${API_URL}`);
    
    try {
        const response = await fetch(API_URL);
        
        // Verifica se a resposta foi bem-sucedida (status 200)
        if (!response.ok) {
            throw new Error(`Erro na API: Status ${response.status} ${response.statusText}`);
        }

        const users = await response.json();
        
        console.log('[Frontend] Dados recebidos com sucesso:', users);

        // Limpa a lista antes de preencher
        usersList.innerHTML = ''; 

        if (users.length === 0) {
            usersList.innerHTML = '<p>Nenhum usuário encontrado na base de dados.</p>';
            return;
        }
        
        // Itera sobre os usuários e cria os elementos HTML
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.className = 'user-item';
            
            listItem.innerHTML = `
                <strong>${user.name}</strong>
                ID: ${user.id}<br>
                Email: ${user.email}
            `;
            usersList.appendChild(listItem);
        });

    } catch (error) {
        console.error('[Frontend] Falha na Conexão/Requisição:', error);
        
        // Exibe uma mensagem de erro clara para o usuário
        usersList.innerHTML = `
            <li class="user-item" style="background: #f8d7da; color: #721c24;">
                <p><strong>ERRO DE CONEXÃO:</strong> Não foi possível buscar os usuários.</p>
                <p>Por favor, verifique no seu Terminal se:</p>
                <ol>
                    <li>O servidor Node.js está rodando (npm run dev).</li>
                    <li>Você adicionou os cabeçalhos <span style="font-family: monospace;">Access-Control-Allow-Origin: *</span> no seu <span style="font-family: monospace;">server.js</span> para resolver o CORS.</li>
                </ol>
            </li>
        `;
    }
}

fetchUsers();