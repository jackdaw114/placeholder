// import { CardTravelSharp } from '@mui/icons-material';
import { Typography, CssBaseline, CardContent, Grid, Card, CardMedia } from '@mui/material';
import ReviewsIcon from '@mui/icons-material/Reviews';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { Container } from '@mui/system';
import { AnimatePresence, motion } from 'framer-motion';
import './HomeNigel.css'
import VerticalLinearStepper from './HomeComponents/stepper'
// import makeStyles from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//     container: {
//         backgroundColor: theme.palette.background.paper
//     }
// }));
const review_cards = [1,2,3]
const footer_test = [1,2,3,4,4,6,7,8,9]

export default function HomeNigel() {
    // const classes = useStyles();
    return (
        <>
            <CssBaseline>

            <main>
                <div className='div-container'>
                    <Container maxWidth='sm' sx={{marginTop:'70px'}}>
                    <motion.div initial={{ opacity: 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        type: 'spring'
                    }}
                    
                    // exit={{ opacity: 0 }}
                    >
                        <Typography className="typography-h1" variant="h1" align='center' gutterBottom>
                            We do it for you.
                        </Typography>
                        </motion.div>
                        <motion.div initial={{ opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.9,
                        type: 'spring'
                    }}>
                    
                        <Typography className="typography-h4" variant="h6" align='center' paragraph>
                            Need your AC cleaned? Or maybe need to finally fix your leaking tap? Or are you looking to hire a team to paint your walls? We are your one-stop solution to ALL your needs. Be it a hairdresser or an interior design team, we got you covered.
                        </Typography>
                </motion.div>
                    </Container>
                </div>
            </main>
            <reviews>
                    <Container className="review-container" maxWidth='large'>
                        <Container className="review-container-heading">
                            <Typography variant='h4' align='center'>
                                Customer reviews
                                <ReviewsIcon/>
                            </Typography>
                        </Container>
                    
                        <Grid container spacing={4}>
                            {review_cards.map((card)=>(
                        
                    <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className='review-card'>
                                <CardMedia
                                    className='reviewer-pfp'
                                    image='https://source.unsplash.com/random'
                                    title="Image title"
                                    />
                                <CardContent className='review-content'>
                                    <Typography variant='h4' gutterBottom>
                                                John Doe
                                    </Typography>
                                    <Typography>
                                        "This website has helped me so much. Urban clap is so bad lmao ded.I really really appreciate the amazing help that they could provide me. i once again recommend workConnect to ALL my fellow indians."
                                    </Typography>

                                </CardContent>
                        </Card>
                    </Grid>
                    ))}
                    
                </Grid>
                </Container>

                </reviews>
                <mission className="mission-super-container">
                    <Container className="mission-container">
                        <Typography variant='h2' align='center' className='typography-h1'>
                            Our mission
                            <WorkspacePremiumIcon/>
                        </Typography>
                        <Typography variant='subtitle1'>
                        The internet has transformed the way that we access and interact with services. Today, it is possible to access a wide range of services, including home services, through online platforms. Even so , other online platforms have their own limitations such as :
                        </Typography>
                        <Typography variant='subtitle1'>
                        Limited access to services : Currently companies are unable to provide services at all locations.
                        </Typography>
                        <Typography variant='subtitle1'>
                        Team based contracts are non existent.
                        </Typography>
                        <Typography variant='subtitle1'>
                        Limited amount of services (also dictated by location). 
                        </Typography>
                        <Typography variant='subtitle1'>
                            Our main aim is to revolutionize the platforms by providing local daily-wage workers employment through our website and allow workers to , based on their merit , be rewarded.
                            We guarantee you with the best workers in your area.
                        </Typography>
                        <Typography variant='h6' className='typography-h4'>
                             Scenario:
                        </Typography>
                        <Typography variant='subtitle1'>
                             Raj is your honest and hardworking local electrician. He is your go-to man to get the job done and always does an amazing job for a good price. In your opinion he is the best electrician for you. But others in your area do not know about Raj. You simply can't be going around broadcasting on a loudspeaker that Raj is the best electrician and deserves more credit to his name. Poor ol' Sunita aunty will get annoyed start beating you up and tell you to turn off that loudspeaker!
                        </Typography>
                        <Container className='mission-scenario-us-container'>

                            <Typography variant='h6' className='typography-h1'>
                                This is where we come in.
                            </Typography>
                            <Typography variant='subtitle1'>
                                Through our website, GOOD workers WILL get credit where it is due. Our website will enable others in your area to see that when it comes to electricians, Raj is THE MAN. And now when Sunita aunty has a ruptured cable wire or broken lightbulb, guess who will be recommended to her through our app(Hint: It's Raj).
                            </Typography>
                            <Typography variant='h6' className='typography-h1'>
                                    The core concept on which our website is built on is to boost local daily wage worker employment thereby improving the accessibility of services to clients.

                            </Typography>
                            <Typography variant='h6' >
                                    Seems amazing, right? Here is something to help you get started with our website : 
                            </Typography>
                        </Container>
                    </Container>

                    <VerticalLinearStepper className='stepper-container'/>

                </mission>
                <footer className='home-footer'>
                    <Typography variant='h6' align='center' gutterBottom>
                        Footer
                    </Typography>
                    <Grid className='footer-grid' container spacing={7} >
                    {footer_test.map(() => (
                        
                            <Grid item>
                                <Typography variant='subtitle1' align='center' color='#9c9c9c'>
                                    Test
                        </Typography>
                            </Grid>
                    ))}
                    </Grid>
                </footer>
            </CssBaseline>
        </>
    )
}