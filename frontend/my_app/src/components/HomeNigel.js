import { Paper, Box, Card ,CardContent,Typography} from '@mui/material';
import { flexbox } from '@mui/system';
// import theme from '../design/palette';
import './HomeNigel.css'

export default function Home() {
    const data = [1, 1, 1];
    return (
        <>
        
            <Box
                sx={{
                position: "relative",
                width: "100vw",
                height: 300,
                backgroundColor: '#E8E8E8',
                alignContent:"center",
            }
        }
        >
            <div className="heading">
                <h1>WE GET IT DONE.</h1>
                <h1>WHEREVER.</h1>
                <h1>WHENEVER.</h1>
            </div>
            </Box>
            <div className='container'>

            {data.map((data)=>{
                return(<Box width='260px' margin={11} sx={{display:'flex',alignItems:"center"}}>
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant='h4' component='div'>
                                Sundar Pichai
                            </Typography>
                            <Typography variant='body2' color='text.secondary'>
                                Part 1 of this most ambitious, larger than life attempt to depict a heist showing an ever supreme antagonist climb his way to d summit of world domination n annihilation succeeds not oof humor n sentiment
                            </Typography>
                        </CardContent>
                    </Card>
                </Box>
                )
            })}
            </div>
        </>
        
    )
}