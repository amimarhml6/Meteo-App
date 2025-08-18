import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useContext } from 'react';
import { InfoContext } from '../Context/InfoContext'

export default function Lang() {

    const { Lang, setLang } = useContext(InfoContext);
    
    const handleChange = (event) => {
        setLang(event.target.value);
    };
    console.log(Lang);
    return(
        <FormControl fullWidth sx={{ color: 'white', marginTop: 3 }}>
                
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Lang}
                onChange={handleChange}
                sx={{
                    width: 140,
                    height: 35,
                    color: 'white',
                    padding: "20px 0px",

                // Bordure blanche par défaut
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',
                },
                // Bordure blanche au hover
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',
                },
                // Bordure blanche au focus
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'white',
                },
                }}
                MenuProps={{
                    PaperProps: {
                        sx: {
                            backgroundColor: '#222', // fond du menu déroulant
                            color: 'white',           // couleur du texte
                            '& .MuiMenuItem-root': {
                                '&:hover': {
                                backgroundColor: '#555', // fond au hover
                                },
                                '&.Mui-selected': {
                                backgroundColor: '#3498db', // fond quand sélectionné
                                color: 'white',
                                }
                            }
                        }
                    }
                }}
            >
                <MenuItem value="English">
                    <img src="https://flagcdn.com/w20/us.png" alt="US Flag" width="20" style={{ marginRight: 15 }} />
                     English
                </MenuItem>
                <MenuItem value="Arabe">
                    <img src="https://flagcdn.com/w20/dz.png" alt="Algerian Flag" width="20" style={{ marginRight: 15 }} />
                     Arabe
                </MenuItem>
            </Select>
        </FormControl>
    )
}