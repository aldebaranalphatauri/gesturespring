import { Link, Typography, Box, List, ListItem, ListItemText } from '@mui/material'

export function Credits() {
  return (
    <Box sx={{ m: 'auto', maxWidth: "400px" }}>
      <Typography variant="h4" gutterBottom>
        Introduzione al gioco del burraco
      </Typography>
      <Typography variant="body1" gutterBottom>
        Questo famoso gioco trae le sue origini dalla famiglia dei giochi della Pinnacola.
        Per giocare a Burraco servono due mazzi di carte francesi, le stesse che si utilizzano nel gioco del poker,
        con la differenza che nel burraco i jolly sono mantenuti nel mazzo di gioco,
        raggiungendo così il totale di 108 carte (54 per mazzo).
      </Typography>
      <Typography variant="h5" gutterBottom>
        Team e squadre
      </Typography>
      <Typography variant="body1" gutterBottom>
        A burraco si può giocare sia in coppia (due contro due) che nel testa a testa (uno contro uno).
        Le dinamiche di gioco non subiscono variazioni.
      </Typography>
      <Typography variant="h5" gutterBottom>
        L'inizio della partita
      </Typography>
      <Typography variant="body1" gutterBottom>
        Il giocatore seduto alla destra del mazziere smezza il mazzo, e il mazziere lo ricompone,
        riponendo la porzione di mazzo che si trovava inizialmente sotto, sopra all'altra.
        Da questo nuovo mazzo vengono ricavati due gruppi da 11 carte, detti anche "pozzetti",
        prendendo una carta per volta dal fondo del mazzo e creando così ciascuno dei due pozzetti.
        Questi due piccoli mazzi vengono riposti uno sull'altro in modo incrociato,
        facendo attenzione a far sì che il mazzetto in cui è stata inserita la prima carta stia sopra all'altro.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Dal mazzo restante saranno estratte 11 carte che saranno distribuite a ciascun giocatore in senso orario.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Le restanti carte saranno invece riposte coperte a formare il mazzo da cui si pesca durante il gioco.
        Un'ultima carta verrà presa dal mazzo di pesca, e sarà riposta scoperta accanto al mazzo di pesca.
        Questa carta darà inizio al "monte scarti", o "monte di pesca".
      </Typography>
      <Typography variant="h5" gutterBottom>
        I turni di gioco
      </Typography>
      <Typography variant="body1" gutterBottom>
        Al proprio turno, ciascun giocatore seduto al tavolo potrà:
      </Typography>
      <List dense={true}>
        <ListItem>
          <ListItemText primary="pescare una carta dal mazzo principale" />
        </ListItem>
        <ListItem>
          <ListItemText primary="prendere tutte le carte dal monte degli scarti" />
        </ListItem>
      </List>
      <Typography variant="body1" gutterBottom>
        A seguito della propria scelta, il giocatore potrà scegliere di calare combinazioni a terra,
        realizzate con le carte in proprio possesso o di legare una o più carte singole alle combinazioni già a terra.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Al termine della fase di creazione delle combinazioni,
        il giocatore sarà obbligato a scartare una carta,
        cosa che può essere bypassata solo qualora il giocatore abbia terminato le carte
        e a terra sia disponibile ancora il pozzetto da prendere della propria squadra.
        In tal caso potrà "andare a pozzetto al volo", senza scartare nessuna carta.
        Andando a pozzetto al volo il giocatore dovrà proseguire a giocare le nuove carte acquisite,
        e comunque al termine della mano dovrà scartare una carta.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Le combinazioni valide che si possono giocare sono:
      </Typography>
      <List dense={true}>
        <ListItem>
          <ListItemText primary="3 o più carte dello stesso seme in sequenza a formare una scala" />
        </ListItem>
        <ListItem>
          <ListItemText primary="3 o più carte dello stesso valore (di qualsiasi seme)" />
        </ListItem>
      </List>
      <Typography variant="body1" gutterBottom>
        A ciascuna combinazione può essere legata, in una qualsiasi posizione della scala,
        una carta jolly o una "pinella", ossia la carta di valore 2.
        Il limite consentito per ciascuna combinazione a terra di pinelle o jolly è 1;
        non possono quindi essere inseriti nella stessa combinazione un jolly ed una pinella allo stesso tempo.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Regole del burraco
      </Typography>
      <Typography variant="body1" gutterBottom>
        Non è possibile creare combinazioni di pinelle o jolly,
        quindi non è possibile ad esempio calare 2 di fiori 2 di picche e 2 di quadri
      </Typography>
      <Typography variant="body1" gutterBottom>
        Quando si aggiunge una carta ad una combinazione è possibile spostare una pinella
        o un jolly già presente nella combinazione in un'altra posizione
      </Typography>
      <Typography variant="body1" gutterBottom>
        Quando si raccoglie una carta dal monte scarti (una soltanto)
        non è possibile scartarla alla fine della mano,
        e si dovrà quindi per forza scartare un'altra carta di quelle in proprio possesso
      </Typography>
      <Typography variant="h5" gutterBottom>
        Termine della partita di burraco
      </Typography>
      <Typography variant="body1" gutterBottom>
        Lo scopo della partita di burraco è totalizzare il punteggio,
        stabilito inizialmente per la chiusura della partita, e farlo prima dei propri avversari.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Per raggiungere la vittoria esistono due strategie di gioco:
      </Typography>
      <List dense={true}>
        <ListItem>
          <ListItemText
            primary="Realizzare il maggior numero di combinazioni possibili"
            secondary="e quindi conquistare il maggior numero di punti." />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Cercare di raggiungere la chiusura della mano prima dell'avversario"
            secondary="prendendo così i punti di chiusura e penalizzare l'avversario che dovrà pagare per tutte le carte ancora in proprio possesso." />
        </ListItem>
      </List>
      <Typography variant="body1" gutterBottom>
        Questo aspetto della chiusura è fondamentale per impostare la strategia di gioco.
        Il grande giocatore esperto di burraco sa riconoscere in base alle proprie carte
        e a come si mette la partita quale delle due strategie seguire per il conseguimento del risultato.
      </Typography>
      <Typography variant="h5" gutterBottom>
        La chiusura
      </Typography>
      <Typography variant="body1" gutterBottom>
        Per chiudere è necessario passare prima per i seguenti momenti intermedi:
      </Typography>
      <List dense={true}>
        <ListItem>
          <ListItemText
            primary="Terminare le carte prese ad inizio partita e poter quindi raccogliere il pozzetto" />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Realizzare un Burraco, ossia una combinazione di 7 o più carte,"
            secondary="sia scale che carte dello stesso valore." />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Dopo aver raccolto il pozzetto rimanere di nuovo senza carte in mano,"
            secondary="scartando un'ultima carta, diversa da jolly o pinella." />
        </ListItem>
      </List>
      <Typography variant="body1" gutterBottom>
        Ciascun burraco viene classificato come segue (con i punti a cui dà diritto):
      </Typography>
      <List dense={true}>
        <ListItem>
          <ListItemText
            primary="Puro (200 punti):"
            secondary="Formato senza jolly ne pinelle, se non nella loro naturale posizione" />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Semipuro (150 punti):"
            secondary="Formato da almeno 8 carte, ma con l'ausilio di una pinella o di un jolly" />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Impuro: (100 punti)"
            secondary="formato da 7 carte, ma utilizzando una pinella o un jolly" />
        </ListItem>
      </List>
      <Typography variant="h5" gutterBottom>
        Il calcolo del punteggio
      </Typography>
      <Typography variant="body1" gutterBottom>
        A seguito della chiusura da parte di un giocatore o di una squadra, si passa al conteggio dei punti.
      </Typography>
      <List dense={true}>
        <ListItem>
          <ListItemText
            primary="La chiusura di per sé dà diritto a 100 punti." />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="I punti di ciascun burraco, come specificato sopra." />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Ogni Jolly aggiunge 30 punti." />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Ogni pinella aggiunge 20 punti." />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Ogni Asso aggiunge 15 punti." />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Ogni Figura, 10, 9 oppure 8 da diritto a 10 punti." />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Ogni altra carta da diritto a 5 punti." />
        </ListItem>
      </List>
      <Typography variant="body1" gutterBottom>
        Se una squadra o un giocatore non è andato a pozzetto perde 100 punti.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Con lo stesso calcolo sopra descritto, tutte le carte,
        che rimangono in mano ad un giocatore al momento della chiusura da parte dell'avversario,
        andranno sottratte al punteggio delle carte in tavolo
      </Typography>
      <Typography variant="body1" gutterBottom>
        Se le carte nel pozzo terminano, senza che nessuno sia arrivato a chiusura,
        ognuno conteggia i propri punti.
        Ma, non essendoci stata chiusura, a nessuno saranno assegnati i 100 punti.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Al termine di una chiusura si prosegue a giocare fino al raggiungimento del punteggio della partita,
        che a volte è fissato in 505, a volte in 1005 e nelle partite più lunghe a 2005.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Tale punteggio viene deciso all'inizio di ogni partita.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Variante a tre giocatori
      </Typography>
      <Typography variant="body1" gutterBottom>
        Nel Burraco a tre giocatori vanno formati due pozzetti uno di 11 carte e l’altro di 18 carte.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Si inizia a giocare il Burraco normalmente senza però creare alcuna coppia,
        quindi ogni giocatore gioca singolarmente fino a quando il primo che finisce le carte
        non accede al pozzetto da 18 carte, continuando a giocare da solo,
        mentre gli altri due giocatori formeranno la coppia che accederà al pozzetto da 11 carte,
        non appena uno dei due giocatori della coppia le avrà finite.
      </Typography>
      <Typography variant="body1" gutterBottom>
        In questa maniera la partita continua, 2 contro 1,
        fino alla chiusura del gioco da parte o di uno dei giocatori della coppia oppure del giocatore singolo.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Al termine del giro i punti accumulati dal giocatore singolo gli saranno tutti attribuiti
        mentre gli altri due giocatori dovranno dividere il gruzzolo guadagnato in parti uguali.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Nel Burraco, quando si gioca a tre giocatori, è molto importante controllare il conteggio dei punti
        in quanto se uno dei giocatori ha conseguito un totale di 1000 punti
        le regole del gioco dovranno cambiare di nuovo: verranno infatti costituiti tre pozzetti da 11 carte
        e per tutta la durata del gioco non si formeranno più delle coppie ma ogni giocatore giocherà per conto suo
        in una sorta di tutti contro tutti, fino a che uno dei giocatori non raggiunge i 1505 punti
        decretando così la fine della partita.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Variante a sei giocatori
      </Typography>
      <Typography variant="body1" gutterBottom>
        Per poter giocare al Burraco a sei giocatori è necessario utilizzare tre mazzi di carte francesi
        e si gioca sempre a coppie, che in questo particolare caso saranno tre invece delle classiche due.
        Il gioco si sviluppa seguendo le regole della versione classica con alcune piccole differenze
        nella chiusura e nella creazione dei pozzi.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Ad ogni giocatore vengono date 11 carte e si predispongono tre pozzetti da 11 carte,
      </Typography>
      <Typography variant="body1" gutterBottom>
        Solo quando uno dei due esaurisce le sue carte si può accedere al pozzetto.
        Il gioco si conclude quando uno dei due giocatori della coppia,
        ha esaurito per la seconda volta le carte in mano e ha realizzato almeno un Burraco.
      </Typography>
      <Typography variant="h5" gutterBottom>
        Crediti
      </Typography>
      <Typography variant="body1" sx={{ display: 'flex', flexDirection: "column" }}>
        Lo sviluppo di questo programma si è avvalso dei seguenti siti:
      </Typography>
      <List dense={true}>
        <ListItem>
          <Link href="https://www.snai.it/giochi/burraco/regole" >
            SNAI - Regole Burraco
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://boardgame.io/" >
            Boardgame: Open Source Game Engine for Turn-Based Games
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://reactjs.org/" >
            React: A JavaScript library for building user interfaces
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://mui.com/" >
            MUI: The React UI library you always wanted
          </Link>
        </ListItem>
      </List>
    </Box>
  )
}