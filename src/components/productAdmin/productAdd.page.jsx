import React from "react";
import "../product.page/product.page.css";
import imagen1 from "../card.product/imagen1.jpg";
import { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const categories = [
  {
    value: 'fuente',
    label: 'Fuente',
  },
  {
    value: 'gabinete',
    label: 'Gabinete',
  },
  {
    value: 'cooler',
    label: 'Cooler',
  },
  {
    value: 'mouse',
    label: 'Mouse',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function ProductAddPage() {

  document.documentElement.scrollTop = 0;

  const classes = useStyles();
  const [category, setCategory] = React.useState('fuente');
  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="productAddContainer">
      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="nombre" label="Nombre del producto" />
        <TextField id="precio" label="Precio" />
        <TextField
          id="select-category"
          select
          label="Categoria"
          value={category}
          onChange={handleChange}
          helperText="Please select your currency"
        >
          {categories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </form>
    </div>
  );
}

export default ProductAddPage;
