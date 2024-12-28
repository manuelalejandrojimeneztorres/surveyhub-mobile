import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./pages/folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'survey-statuses',
    loadChildren: () => import('./pages/survey-statuses/survey-statuses.module').then(m => m.SurveyStatusesPageModule)
  },
  {
    path: 'add-survey-status',
    loadChildren: () => import('./pages/add-survey-status/add-survey-status.module').then(m => m.AddSurveyStatusPageModule)
  },
  {
    path: 'update-survey-status/:id',
    loadChildren: () => import('./pages/update-survey-status/update-survey-status.module').then(m => m.UpdateSurveyStatusPageModule)
  },
  {
    path: 'surveys',
    loadChildren: () => import('./pages/surveys/surveys.module').then(m => m.SurveysPageModule)
  },
  {
    path: 'add-survey',
    loadChildren: () => import('./pages/add-survey/add-survey.module').then(m => m.AddSurveyPageModule)
  },
  {
    path: 'update-survey/:id',
    loadChildren: () => import('./pages/update-survey/update-survey.module').then(m => m.UpdateSurveyPageModule)
  },
  {
    path: 'question-types',
    loadChildren: () => import('./pages/question-types/question-types.module').then(m => m.QuestionTypesPageModule)
  },
  {
    path: 'add-question-type',
    loadChildren: () => import('./pages/add-question-type/add-question-type.module').then(m => m.AddQuestionTypePageModule)
  },
  {
    path: 'update-question-type/:id',
    loadChildren: () => import('./pages/update-question-type/update-question-type.module').then(m => m.UpdateQuestionTypePageModule)
  },
  {
    path: 'questions',
    loadChildren: () => import('./pages/questions/questions.module').then(m => m.QuestionsPageModule)
  },
  {
    path: 'add-question',
    loadChildren: () => import('./pages/add-question/add-question.module').then(m => m.AddQuestionPageModule)
  },
  {
    path: 'update-question/:id',
    loadChildren: () => import('./pages/update-question/update-question.module').then(m => m.UpdateQuestionPageModule)
  },
  {
    path: 'question-options',
    loadChildren: () => import('./pages/question-options/question-options.module').then(m => m.QuestionOptionsPageModule)
  },
  {
    path: 'add-question-option',
    loadChildren: () => import('./pages/add-question-option/add-question-option.module').then(m => m.AddQuestionOptionPageModule)
  },
  {
    path: 'update-question-option/:id',
    loadChildren: () => import('./pages/update-question-option/update-question-option.module').then(m => m.UpdateQuestionOptionPageModule)
  },
  {
    path: 'system-users',
    loadChildren: () => import('./pages/system-users/system-users.module').then(m => m.SystemUsersPageModule)
  },
  {
    path: 'add-system-user',
    loadChildren: () => import('./pages/add-system-user/add-system-user.module').then(m => m.AddSystemUserPageModule)
  },
  {
    path: 'update-system-user/:id',
    loadChildren: () => import('./pages/update-system-user/update-system-user.module').then(m => m.UpdateSystemUserPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module').then(m => m.SigninPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
