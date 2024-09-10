import { useForm } from 'react-hook-form';
import Header from '../components/Header';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import authAxios from '../utils/authAxios';
import { useEffect } from 'react';

const RegisterProblemPage = () => {
  const examplesSchema = z.object({
    inputText: z
      .string()
      .trim()
      .min(2, { message: 'Input must be at least 2 chars long.' })
      .max(25, { message: 'Input must be at most 25 chars long.' }),
    outputText: z
      .string()
      .trim()
      .min(2, { message: 'Output must be at least 2 chars long.' })
      .max(25, { message: 'Output must be at most 25 chars long.' }),
    imageUrl: z.string().optional(),
    explanation: z.string().optional(),
    case: z.enum(['CASE1', 'CASE2', 'CASE3']),
  });

  const problemSchema = z.object({
    title: z
      .string({ required_error: 'Title cannot be empty.' })
      .trim()
      .min(6, { message: 'Title must be atleast 6 characters long.' })
      .max(25, { message: 'Title cannot be more than 25 characters.' }),
    category: z
      .string({ required_error: 'Category cannot be empty.' })
      .trim()
      .min(5, { message: 'Category must be atleast 5 characters long.' })
      .max(25, { message: 'Category cannot be more than 25 characters.' }),
    order: z.number({ required_error: 'Order cannot be empty.' }),
    videoId: z.string().trim().optional(),
    difficulty: z.enum(['EASY', 'MEDIUM', 'HARD']),
  });

  const paraStatementsSchema = z.object({
    paraOne: z
      .string({ required_error: 'Paragraph One cannot be empty.' })
      .trim()
      .min(6, { message: 'Paragraph One must be atleast 6 characters long.' })
      .max(125, {
        message: 'Paragraph One cannot be more than 125 characters.',
      }),
    paraTwo: z
      .string({ required_error: 'Paragraph Two  cannot be empty.' })
      .trim()
      .min(0, { message: 'Paragraph Two  must be atleast 0 characters long.' })
      .max(125, {
        message: 'Paragraph Two  cannot be more than 125 characters.',
      }),
    paraThree: z
      .string({ required_error: 'Paragraph Three  cannot be empty.' })
      .trim()
      .min(0, {
        message: 'Paragraph Three  must be atleast 0 characters long.',
      })
      .max(125, {
        message: 'Paragraph Three  cannot be more than 125 characters.',
      }),
    paraFour: z
      .string({ required_error: 'Paragraph Four  cannot be empty.' })
      .trim()
      .min(0, { message: 'Paragraph Four  must be atleast 0 characters long.' })
      .max(125, {
        message: 'Paragraph Four  cannot be more than 125 characters.',
      }),
    paraFive: z
      .string({ required_error: 'Paragraph Five  cannot be empty.' })
      .trim()
      .min(0, { message: 'Paragraph Five  must be atleast 0 characters long.' })
      .max(125, {
        message: 'Paragraph Five  cannot be more than 125 characters.',
      }),
  });

  const constraintsSchema = z.object({
    constraintOne: z
      .string({ required_error: 'Constraint One cannot be empty.' })
      .trim()
      .min(6, { message: 'Constraint One must be atleast 6 characters long.' })
      .max(25, {
        message: 'Constraint One cannot be more than 25 characters.',
      }),
    constraintTwo: z
      .string({ required_error: 'Constraint Two  cannot be empty.' })
      .trim()
      .min(0, { message: 'Constraint Two  must be atleast 0 characters long.' })
      .max(25, {
        message: 'Constraint Two  cannot be more than 25 characters.',
      }),
    constraintThree: z
      .string({ required_error: 'Constraint Three  cannot be empty.' })
      .trim()
      .min(0, {
        message: 'Constraint Three  must be atleast 0 characters long.',
      })
      .max(25, {
        message: 'Constraint Three  cannot be more than 25 characters.',
      }),
    constraintFour: z
      .string({ required_error: 'Constraint Four  cannot be empty.' })
      .trim()
      .min(0, {
        message: 'Constraint Four  must be atleast 0 characters long.',
      })
      .max(25, {
        message: 'Constraint Four  cannot be more than 25 characters.',
      }),
    constraintFive: z
      .string({ required_error: 'Constraint Five  cannot be empty.' })
      .trim()
      .min(0, {
        message: 'Constraint Five  must be atleast 0 characters long.',
      })
      .max(25, {
        message: 'Constraint Five  cannot be more than 25 characters.',
      }),
  });

  const createProblemSchema = z.object({
    problem: problemSchema,
    paraStatements: paraStatementsSchema,
    constraints: constraintsSchema,
    examples: z.array(examplesSchema).min(3),
  });

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(createProblemSchema) });

  const onSubmitHandler = async (data) => {
    try {
      console.log('data', data);
      const { problem, constraints, paraStatements, examples } = data;

      const result = await authAxios.post('/problems/addProblem', data);
      console.log('result', result);
      // console.log('problem', problem);
      // console.log('paraStatements', paraStatements);
      // console.log('constraints', constraints);
      // console.log('examples', examples);
    } catch (error) {
      console.log('error==>', error);
    }
  };
  // console.log('errors', errors);
  // console.log("sdsdsd=>",typeof(document.getElementById("paraOne")?.value))
  useEffect(() => {
    register('examples.0.case');
    register('examples.1.case');
    register('examples.2.case');
    setValue('examples.0.case', 'CASE1');
    setValue('examples.1.case', 'CASE2');
    setValue('examples.2.case', 'CASE3');
  }, []);

  useEffect(() => {
    console.log(getValues('examples.0.case'));
    console.log(getValues('examples.1.case'));
    console.log(getValues('examples.2.case'));
  }, []);

  return (
    <div className='h-full bg-blue-500 flex flex-col'>
      <Header />
      <div className='bg-dark-layer-2 h-auto grow flex justify-center'>
        <div className='w-4/5 bg-dark-layer-1 flex flex-col items-center mt-6 rounded-lg text-white'>
          <p className='font-extrabold text-xl p-6'>Create Problem</p>
          <form
            className='w-full flex '
            onSubmit={handleSubmit(onSubmitHandler)}
          >
            <div className='grow w-1/2 border-white border-r-2 flex flex-col justify-between'>
              <div className='mx-6'>
                <div className='flex flex-col'>
                  <label htmlFor='title'>Title</label>
                  <input
                    id='title'
                    {...register('problem.title')}
                    className={`rounded-lg h-10 mt-2 w-full bg-dark-layer-1 p-2 border-2 ${
                      errors.problem?.title ? 'border-rose-700' : 'border-white'
                    }`}
                  />
                  {errors.problem?.title && (
                    <span className='text-xs text-rose-500'>
                      {errors.problem?.title.message}
                    </span>
                  )}
                </div>
                <div
                  className={`flex flex-col ${
                    errors.problem?.title ? 'mt-0' : 'mt-4'
                  }`}
                >
                  <label htmlFor='difficulty'>Difficulty</label>
                  <select
                    id='difficulty'
                    {...register('problem.difficulty')}
                    className={`rounded-lg h-10 mt-2 w-full bg-dark-layer-1 p-2 border-2 ${
                      errors.problem?.difficulty
                        ? 'border-rose-700'
                        : 'border-white'
                    }`}
                  >
                    <option>EASY</option>
                    <option>MEDIUM</option>
                    <option>HARD</option>
                  </select>
                  {errors.problem?.difficulty && (
                    <span className='text-xs text-rose-500'>
                      {errors.problem?.difficulty.message}
                    </span>
                  )}
                </div>
                <div
                  className={`flex flex-col ${
                    errors.problem?.difficulty ? 'mt-0' : 'mt-4'
                  }`}
                >
                  <label htmlFor='category'>Category</label>
                  <input
                    id='category'
                    {...register('problem.category')}
                    className={`rounded-lg h-10 mt-2 w-full bg-dark-layer-1 p-2 border-2 ${
                      errors.problem?.category
                        ? 'border-rose-700'
                        : 'border-white'
                    }`}
                  />
                  {errors.problem?.category && (
                    <span className='text-xs text-rose-500'>
                      {errors.problem?.category.message}
                    </span>
                  )}
                </div>
                <div
                  className={`flex flex-col ${
                    errors.problem?.category ? 'mt-0' : 'mt-4'
                  }`}
                >
                  <label htmlFor='order'>Order</label>
                  <input
                    id='order'
                    type='number'
                    {...register('problem.order', { valueAsNumber: true })}
                    className={`rounded-lg h-10 mt-2 w-full bg-dark-layer-1 p-2 border-2 ${
                      errors.problem?.order ? 'border-rose-700' : 'border-white'
                    }`}
                  />
                  {errors.problem?.order && (
                    <span className='text-xs text-rose-500'>
                      {errors.problem?.order.message}
                    </span>
                  )}
                </div>
                <div
                  className={`flex flex-col ${
                    errors.problem?.order ? 'mt-0' : 'mt-4'
                  }`}
                >
                  <label htmlFor='video'>Video Link</label>
                  <textarea
                    id='video'
                    {...register('problem.videoUrl')}
                    className='border-2 rounded-lg border-white mt-2 w-full bg-dark-layer-1 p-2'
                    rows={5}
                  />
                  {errors.problem?.videoUrl && (
                    <span className='text-xs text-rose-500'>
                      {errors.problem?.videoUrl.message}
                    </span>
                  )}
                </div>
              </div>
              <div
                className={`border-t-2 border-white mx-6 ${
                  errors.problem?.videoUrl ? 'mt-4' : 'mt-8'
                }`}
              >
                <div className=''>
                  <div className='mt-6'>
                    Example one
                    <div className='flex flex-col mt-2'>
                      <label htmlFor='inputTextOne'>Input</label>
                      <input
                        id='inputTextOne'
                        {...register('examples.0.inputText')}
                        className={`border-2 rounded-lg  h-10 mt-2 w-full bg-dark-layer-1 p-2 ${
                          errors.examples?.[0]?.inputText
                            ? 'border-rose-700'
                            : 'border-white'
                        }`}
                      />
                      {errors.examples?.[0]?.inputText && (
                        <span className='text-xs text-rose-500'>
                          {errors.examples?.[0]?.inputText.message}
                        </span>
                      )}
                      <div
                        className={`flex flex-col ${
                          errors.examples?.[0]?.inputText ? 'mt-0' : 'mt-4'
                        }`}
                      >
                        <label htmlFor='outputText'>Output</label>
                        <input
                          id='outputText'
                          {...register('examples.0.outputText')}
                          className={`border-2 rounded-lg  h-10 mt-2 w-full bg-dark-layer-1 p-2 ${
                            errors.examples?.[0]?.outputText
                              ? 'border-rose-700'
                              : 'border-white'
                          }`}
                        />
                        {errors.examples?.[0].outputText && (
                          <span className='text-xs text-rose-500'>
                            {errors.examples?.[0].outputText.message}
                          </span>
                        )}
                      </div>
                      <div
                        className={`flex flex-col ${
                          errors.examples?.[0].outputText ? 'mt-0' : 'mt-4'
                        }`}
                      >
                        <label htmlFor='imageUrl'>Image Url</label>
                        <input
                          id='imageUrl'
                          {...register('examples.0.imageUrl')}
                          className={`border-2 rounded-lg  h-10 mt-2 w-full bg-dark-layer-1 p-2 ${
                            errors.examples?.[0].imageUrl
                              ? 'border-rose-700'
                              : 'border-white'
                          }`}
                        />
                        {errors.examples?.[0].imageUrl && (
                          <span className='text-xs text-rose-500'>
                            {errors.examples?.[0].imageUrl.message}
                          </span>
                        )}
                      </div>
                      <div
                        className={`flex flex-col ${
                          errors.examples?.[0].imageUrl ? 'mt-0' : 'mt-4'
                        }`}
                      >
                        <label htmlFor='description'>Description</label>
                        <input
                          id='description'
                          {...register('examples.0.explanation')}
                          className={`border-2 rounded-lg  h-10 mt-2 w-full bg-dark-layer-1 p-2 ${
                            errors.examples?.[0].explanation
                              ? 'border-rose-700'
                              : 'border-white'
                          }`}
                        />
                        {errors.examples?.[0].explanation && (
                          <span className='text-xs text-rose-500'>
                            {errors.examples?.[0].explanation.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className='mt-6'>
                    Example Two
                    <div className='flex flex-col mt-2'>
                      <label htmlFor='inputTextOne'>Input</label>
                      <input
                        id='inputTextOne'
                        {...register('examples.1.inputText')}
                        className={`border-2 rounded-lg  h-10 mt-2 w-full bg-dark-layer-1 p-2 ${
                          errors.examples?.[1].inputText
                            ? 'border-rose-700'
                            : 'border-white'
                        }`}
                      />
                      {errors.examples?.[1].inputText && (
                        <span className='text-xs text-rose-500'>
                          {errors.examples?.[1].inputText.message}
                        </span>
                      )}
                      <div
                        className={`flex flex-col ${
                          errors.examples?.[1].inputText ? 'mt-0' : 'mt-4'
                        }`}
                      >
                        <label htmlFor='outputText'>Output</label>
                        <input
                          id='outputText'
                          {...register('examples.1.outputText')}
                          className={`border-2 rounded-lg  h-10 mt-2 w-full bg-dark-layer-1 p-2 ${
                            errors.examples?.[1].outputText
                              ? 'border-rose-700'
                              : 'border-white'
                          }`}
                        />
                        {errors.examples?.[1].outputText && (
                          <span className='text-xs text-rose-500'>
                            {errors.examples?.[1].outputText.message}
                          </span>
                        )}
                      </div>
                      <div
                        className={`flex flex-col ${
                          errors.examples?.[1].outputText ? 'mt-0' : 'mt-4'
                        }`}
                      >
                        <label htmlFor='imageUrl'>Image Url</label>
                        <input
                          id='imageUrl'
                          {...register('examples.1.imageUrl')}
                          className={`border-2 rounded-lg  h-10 mt-2 w-full bg-dark-layer-1 p-2 ${
                            errors.examples?.[1].imageUrl
                              ? 'border-rose-700'
                              : 'border-white'
                          }`}
                        />
                        {errors.examples?.[1].imageUrl && (
                          <span className='text-xs text-rose-500'>
                            {errors.examples?.[1].imageUrl.message}
                          </span>
                        )}
                      </div>
                      <div
                        className={`flex flex-col ${
                          errors.examples?.[1].imageUrl ? 'mt-0' : 'mt-4'
                        }`}
                      >
                        <label htmlFor='description'>Description</label>
                        <input
                          id='description'
                          {...register('examples.1.explanation')}
                          className={`border-2 rounded-lg  h-10 mt-2 w-full bg-dark-layer-1 p-2 ${
                            errors.examples?.[1].explanation
                              ? 'border-rose-700'
                              : 'border-white'
                          }`}
                        />
                        {errors.examples?.[1].explanation && (
                          <span className='text-xs text-rose-500'>
                            {errors.examples?.[1].explanation.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className='mt-6'>
                    Example Three
                    <div className='flex flex-col mt-2'>
                      <label htmlFor='inputTextOne'>Input</label>
                      <input
                        id='inputTextOne'
                        {...register('examples.2.inputText')}
                        className={`border-2 rounded-lg  h-10 mt-2 w-full bg-dark-layer-1 p-2 ${
                          errors.examples?.[2].inputText
                            ? 'border-rose-700'
                            : 'border-white'
                        }`}
                      />
                      {errors.examples?.[2].inputText && (
                        <span className='text-xs text-rose-500'>
                          {errors.examples?.[2].inputText.message}
                        </span>
                      )}
                      <div
                        className={`flex flex-col ${
                          errors.examples?.[2].inputText ? 'mt-0' : 'mt-4'
                        }`}
                      >
                        <label htmlFor='outputText'>Output</label>
                        <input
                          id='outputText'
                          {...register('examples.2.outputText')}
                          className={`border-2 rounded-lg  h-10 mt-2 w-full bg-dark-layer-1 p-2 ${
                            errors.examples?.[2].outputText
                              ? 'border-rose-700'
                              : 'border-white'
                          }`}
                        />
                        {errors.examples?.[2].outputText && (
                          <span className='text-xs text-rose-500'>
                            {errors.examples?.[2].outputText.message}
                          </span>
                        )}
                      </div>
                      <div
                        className={`flex flex-col ${
                          errors.examples?.[2].outputText ? 'mt-0' : 'mt-4'
                        }`}
                      >
                        <label htmlFor='imageUrl'>Image Url</label>
                        <input
                          id='imageUrl'
                          {...register('examples.2.imageUrl')}
                          className={`border-2 rounded-lg  h-10 mt-2 w-full bg-dark-layer-1 p-2 ${
                            errors.examples?.[2].imageUrl
                              ? 'border-rose-700'
                              : 'border-white'
                          }`}
                        />
                        {errors.examples?.[2].imageUrl && (
                          <span className='text-xs text-rose-500'>
                            {errors.examples?.[0].imageUrl.message}
                          </span>
                        )}
                      </div>
                      <div
                        className={`flex flex-col ${
                          errors.examples?.[2].imageUrl ? 'mt-0' : 'mt-4'
                        }`}
                      >
                        <label htmlFor='description'>Description</label>
                        <input
                          id='description'
                          {...register('examples.2.explanation')}
                          className={`border-2 rounded-lg  h-10 mt-2 w-full bg-dark-layer-1 p-2 ${
                            errors.examples?.[2].explanation
                              ? 'border-rose-700'
                              : 'border-white'
                          }`}
                        />
                        {errors.examples?.[2].explanation && (
                          <span className='text-xs text-rose-500'>
                            {errors.examples?.[2].explanation.message}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='grow w-1/2 flex flex-col justify-between'>
              <div className='mx-6'>
                <div className='flex flex-col'>
                  <label htmlFor='paraOne'>paragraph one</label>
                  <textarea
                    id='paraOne'
                    {...register('paraStatements.paraOne')}
                    className={`border-2 rounded-lg mt-2 w-full bg-dark-layer-1 p-2 ${
                      errors.paraStatements?.paraOne
                        ? 'border-rose-700'
                        : 'border-white'
                    }`}
                    rows={5}
                  />
                  {errors.paraStatements?.paraOne && (
                    <span className='text-xs text-rose-500'>
                      {errors.paraStatements?.paraOne.message}
                    </span>
                  )}
                </div>
                <div
                  className={`flex flex-col ${
                    errors.paraStatements?.paraOne ? 'mt-0' : 'mt-4'
                  }`}
                >
                  <label htmlFor='paraTwo'>paragraph two</label>
                  <textarea
                    id='paraTwo'
                    {...register('paraStatements.paraTwo')}
                    className={`border-2 rounded-lg mt-2 w-full bg-dark-layer-1 p-2 ${
                      errors.paraStatements?.paraTwo
                        ? 'border-rose-700'
                        : 'border-white'
                    }`}
                    rows={5}
                  />
                  {errors.paraStatements?.paraTwo && (
                    <span className='text-xs text-rose-500'>
                      {errors.paraStatements?.paraTwo.message}
                    </span>
                  )}
                </div>
                <div
                  className={`flex flex-col ${
                    errors.paraStatements?.paraTwo ? 'mt-0' : 'mt-4'
                  }`}
                >
                  <label htmlFor='title'>paragraph three</label>
                  <textarea
                    id='video'
                    {...register('paraStatements.paraThree')}
                    className={`border-2 rounded-lg mt-2 w-full bg-dark-layer-1 p-2 ${
                      errors.paraStatements?.paraThree
                        ? 'border-rose-700'
                        : 'border-white'
                    }`}
                    rows={5}
                  />
                  {errors.paraStatements?.paraThree && (
                    <span className='text-xs text-rose-500'>
                      {errors.paraStatements.paraThree.message}
                    </span>
                  )}
                </div>
                <div
                  className={`flex flex-col ${
                    errors.paraStatements?.paraThree ? 'mt-0' : 'mt-4'
                  }`}
                >
                  <label htmlFor='title'>paragraph four</label>
                  <textarea
                    id='video'
                    {...register('paraStatements.paraFour')}
                    className={`border-2 rounded-lg mt-2 w-full bg-dark-layer-1 p-2 ${
                      errors.paraStatements?.paraFour
                        ? 'border-rose-700'
                        : 'border-white'
                    }`}
                    rows={5}
                  />
                  {errors.paraStatements?.paraFour && (
                    <span className='text-xs text-rose-500'>
                      {errors.paraStatements.paraFour.message}
                    </span>
                  )}
                </div>
                <div
                  className={`flex flex-col ${
                    errors.paraStatements?.paraFour ? 'mt-0' : 'mt-4'
                  }`}
                >
                  <label htmlFor='title'>paragraph five</label>
                  <textarea
                    id='video'
                    {...register('paraStatements.paraFive')}
                    className={`border-2 rounded-lg mt-2 w-full bg-dark-layer-1 p-2 ${
                      errors.paraStatements?.paraFive
                        ? 'border-rose-700'
                        : 'border-white'
                    }`}
                    rows={5}
                  />
                  {errors.paraStatements?.paraFive && (
                    <span className='text-xs text-rose-500'>
                      {errors.paraStatements.paraFive.message}
                    </span>
                  )}
                </div>
              </div>
              <div
                className={`mx-6 border-t-2 border-white ${
                  errors.paraStatements?.paraFive ? 'mt-4' : 'mt-8'
                }`}
              >
                <div className='flex flex-col '>
                  <label htmlFor='constraintOne' className='mt-6'>
                    Constraint One
                  </label>
                  <input
                    id='constraintOne'
                    {...register('constraints.constraintOne')}
                    className={`border-2 rounded-lg h-10 mt-2 w-full bg-dark-layer-1 p-2 ${
                      errors.constraints?.constraintOne
                        ? 'border-rose-700'
                        : 'border-white'
                    }`}
                  />
                  {errors.constraints?.constraintOne && (
                    <span className='text-xs text-rose-500'>
                      {errors.constraints?.constraintOne.message}
                    </span>
                  )}
                </div>
                <div
                  className={`flex flex-col ${
                    errors.constraints?.constraintOne ? 'mt-0' : 'mt-4'
                  }`}
                >
                  <label htmlFor='constraintTwo'>Constraint two</label>
                  <input
                    id='constraintTwo'
                    {...register('constraints.constraintTwo')}
                    className={`border-2 rounded-lg h-10 mt-2 w-full bg-dark-layer-1 p-2 ${
                      errors.constraints?.constraintTwo
                        ? 'border-rose-700'
                        : 'border-white'
                    }`}
                  />
                  {errors.constraints?.constraintTwo && (
                    <span className='text-xs text-rose-500'>
                      {errors.constraints?.constraintTwo.message}
                    </span>
                  )}
                </div>
                <div
                  className={`flex flex-col ${
                    errors.constraints?.constraintTwo ? 'mt-0' : 'mt-4'
                  }`}
                >
                  <label htmlFor='constraintThree'>Constraint three</label>
                  <input
                    id='constraintThree'
                    {...register('constraints.constraintThree')}
                    className={`border-2 rounded-lg h-10 mt-2 w-full bg-dark-layer-1 p-2 ${
                      errors.constraints?.constraintThree
                        ? 'border-rose-700'
                        : 'border-white'
                    }`}
                  />
                  {errors.constraints?.constraintThree && (
                    <span className='text-xs text-rose-500'>
                      {errors.constraints?.constraintThree.message}
                    </span>
                  )}
                </div>
                <div
                  className={`flex flex-col ${
                    errors.constraints?.constraintThree ? 'mt-0' : 'mt-4'
                  }`}
                >
                  <label htmlFor='constraintFour'>Constraint four</label>
                  <input
                    id='constraintFour'
                    {...register('constraints.constraintFour')}
                    className={`border-2 rounded-lg h-10 mt-2 w-full bg-dark-layer-1 p-2 ${
                      errors.constraints?.constraintFour
                        ? 'border-rose-700'
                        : 'border-white'
                    }`}
                  />
                  {errors.constraints?.constraintFour && (
                    <span className='text-xs text-rose-500'>
                      {errors.constraints?.constraintFour.message}
                    </span>
                  )}
                </div>
                <div
                  className={`flex flex-col ${
                    errors.constraints?.constraintFour ? 'mt-0' : 'mt-4'
                  }`}
                >
                  <label htmlFor='constraintFive'>Constraint five</label>
                  <input
                    id='constraintFive'
                    {...register('constraints.constraintFive')}
                    className={`border-2 rounded-lg h-10 mt-2 w-full bg-dark-layer-1 p-2 ${
                      errors.constraints?.constraintFive
                        ? 'border-rose-700'
                        : 'border-white'
                    }`}
                  />
                  {errors.constraints?.constraintFive && (
                    <span className='text-xs text-rose-500'>
                      {errors.constraints?.constraintFive.message}
                    </span>
                  )}
                </div>
              </div>

              <button
                type='submit'
                className='mx-6 bg-green-600 px-4 py-1 border border-dark-layer-3 rounded-lg'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default RegisterProblemPage;
