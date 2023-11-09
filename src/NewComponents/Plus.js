// import React, { useState } from 'react';
// import {
//   Card,
//   Typography,
//   CardContent,
//   CardActions,
//   List,
//   ListItem,
//   TextField,
//   Button,
//   Select,
//   MenuItem,
//   Slider,
// } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles((theme) => ({
//   card: {
//     maxWidth: '80%',
//     maxHeight: '80%',
//     margin: '0 auto',
//     backgroundImage: `url("https://img.freepik.com/free-photo/top-close-up-view-vegetables-tomatoes-with-pedicels-garlic-bell-peppers-lemon-oil-onion_140725-72203.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698537600&semt=ais")`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     position: 'relative',

//   },
//   inputField: {
//     width: '50%',
//     margin: '0 auto',
//     border: '2px solid black',
//   },

//   TextInput: {
//     width: '20%',
//     marginRight: '2%',
//     marginLeft: '20%',
//     border: '2px solid black',
//   },
//   NumInput: {
//     width: '10%',
//     marginRight: '2%',
//     border: '2px solid black',
//   },

//   AddButton: {
//     color: 'white',
//     backgroundColor: 'black',
//     marginLeft: '20%',
//     border: '2px solid ',

//     '&:hover': {
//       backgroundColor: 'blue',
//     },
//   },

//   dropdown: {
//     width: '10%',
//     marginTop: '10px',
//     marginBottom: '10px',
//     border: '2px solid black',
//   },
//   comment: {
//     width: '40%',
//     Height: '20%',
//     marginLeft: '30%',
//     border: '2px solid black',
//     },

//   postButton: {
//     backgroundColor: 'red',
//     color: 'white',
//     padding: '2px',
//     margin: '0 auto',
//     borderRadius: '5px',
//     transition: 'background-color 0.3s',

//     '&:hover': {
//       backgroundColor: 'green',

//   },},
//   Slider: {
//     width: '40%',
//     display: 'flex',
//     margin: '0 auto',

//   }
// }));

// function Plus() {
//   const classes = useStyles();

//   const [recipeName, setRecipeName] = useState('');
//   const [ingredients, setIngredients] = useState([{ name: '', quantity: '', unit: 'grams' }]);
//   const [instructions, setInstructions] = useState([
//     { action: '', time: '', unit: 'minutes' },
//   ]);
//   const [difficulty, setDifficulty] = useState(5);
//   const [comments, setComments] = useState('');

//   const handleAddIngredient = () => {
//     setIngredients([...ingredients, { name: '', quantity: '', unit: 'grams' }]);
//   };

//   const handleAddInstruction = () => {
//     setInstructions([...instructions, { action: '', time: '', unit: 'minutes' }]);
//   };

//   const handleIngredientChange = (index, field, value) => {
//     const newIngredients = [...ingredients];
//     newIngredients[index][field] = value;
//     setIngredients(newIngredients);
//   };

//   const handleInstructionChange = (index, field, value) => {
//     const newInstructions = [...instructions];
//     newInstructions[index][field] = value;
//     setInstructions(newInstructions);
//   };

//   const handlePost = () => {  // need to connect endpoints here
//     const recipeData = {
//       recipeName,
//       ingredients,
//       instructions,
//       difficulty,
//       comments,
//     };
//     console.log('Posted Recipe:', recipeData);
//   };
 

//   return (
//     <Card className={classes.card}>
//       <CardContent>
//         <div className={classes.center}>
//         <Typography variant="h4" align="center">
//           Post your recipe
//         </Typography>
//         </div>

//         <List>
//           <ListItem>
//             <TextField
//               label="Recipe Name"
//               value={recipeName}
//               onChange={(e) => setRecipeName(e.target.value)}
//               className={classes.inputField}
//             />
//           </ListItem>
//         </List>

//         <List>
//           <div className={classes.center}>
//           <Typography variant="h6" align="center">
//           Ingredients
//         </Typography>
//              </div>
//           {ingredients.map((ingredient, index) => (
//             <ListItem key={`ingredient-${index}`}>
//               <TextField
//                 label="Ingredient"
//                 value={ingredient.name}
//                 onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
//                 className={classes.TextInput}
//               />
//               <TextField
//                 label="Quantity"
//                 value={ingredient.quantity}
//                 onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
//                 className={classes.NumInput}
//               />
//               <Select
//                 value={ingredient.unit}
//                 onChange={(e) => handleIngredientChange(index, 'unit', e.target.value)}
//                 className={classes.dropdown}
//               >
//                 <MenuItem value="grams">grams</MenuItem>
//                 <MenuItem value="tsp">tsp</MenuItem>
//                 <MenuItem value="oz">oz</MenuItem>
//               </Select>
//             </ListItem>
//           ))}
//           <Button onClick={handleAddIngredient} className={classes.AddButton}>
//             Add Ingredient
//           </Button>
//         </List>

//         <List>
//           <div className={classes.center}>
//           <Typography variant="h6" align="center">
//           Instructions
//         </Typography>
//               </div>
//           {instructions.map((instruction, index) => (
//             <ListItem key={`instruction-${index}`}>
//               <TextField
//                 label="Action"
//                 value={instruction.action}
//                 onChange={(e) => handleInstructionChange(index, 'action', e.target.value)}
//                 className={classes.TextInput}
//               />
//               <TextField
//                 label="Time"
//                 value={instruction.time}
//                 onChange={(e) => handleInstructionChange(index, 'time', e.target.value)}
//                 className={classes.NumInput}
//               />
//               <Select
//                 value={instruction.unit}
//                 onChange={(e) => handleInstructionChange(index, 'unit', e.target.value)}
//                 className={classes.dropdown}
//               >
//                 <MenuItem value="minutes">minutes</MenuItem>
//                 <MenuItem value="hours">hours</MenuItem>
//                 <MenuItem value="seconds">seconds</MenuItem>
//               </Select>
//             </ListItem>
//           ))}
//           <Button onClick={handleAddInstruction} className={classes.AddButton}>
//             Add Instruction
//           </Button>
//         </List>

//         <List>
//           <div className={classes.Slider}>Difficulty:</div>
//           <div className={classes.Slider}>
//             <Slider
//               value={difficulty}
//               min={1}
//               max={10}
//               step={1}
//               onChange={(e, value) => setDifficulty(value)}
//             />
//           </div>
//           <div className={classes.Slider}>{difficulty}</div>
//         </List>

//         <List>
//           <div>
//           <Typography variant="h6" align="center">
//           Additional Comments:
//         </Typography>
//           </div>
//           <TextField
//             value={comments}
//             onChange={(e) => setComments(e.target.value)}
//             className={classes.comment}
//           />
//         </List>
//       </CardContent>

//       <CardActions>
//         <div className={classes.postButton}>
//           <Button onClick={handlePost} className={classes.postButton}>
//             Add Recipe
//           </Button>
//         </div>
//       </CardActions>
//     </Card>
//   );
// }

// export default Plus;
