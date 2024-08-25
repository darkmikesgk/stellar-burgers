import { FC } from 'react';
import { Preloader } from '../ui/preloader';
import { IngredientDetailsUI } from '../ui/ingredient-details';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from '../../services/store';
import { selectIngredients } from '../../services/slices/ingredients';
import { Modal } from '@components';

export const IngredientDetails: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const ingredientData = useSelector(selectIngredients).find(
    (item) => item._id === id
  );

  if (!ingredientData) {
    return (
      <Modal
        title={'Загрузка'}
        onClose={() => {
          navigate(-1);
        }}
      >
        <Preloader />
      </Modal>
    );
  }

  return (
    <Modal
      title={'Детали ингредиента'}
      onClose={() => {
        navigate(-1);
      }}
    >
      <IngredientDetailsUI ingredientData={ingredientData} />
    </Modal>
  );
};
