import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator', 'Survey Manager', 'Respondent'] },
    loadChildren: () => import('./pages/folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'dashboard',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator', 'Survey Manager', 'Respondent'] },
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'statistics',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator', 'Survey Manager'] },
    loadChildren: () => import('./pages/statistics/statistics.module').then(m => m.StatisticsPageModule)
  },
  {
    path: 'survey-statuses',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator', 'Survey Manager', 'Respondent'] },
    loadChildren: () => import('./pages/survey-statuses/survey-statuses.module').then(m => m.SurveyStatusesPageModule)
  },
  {
    path: 'add-survey-status',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator', 'Survey Manager'] },
    loadChildren: () => import('./pages/add-survey-status/add-survey-status.module').then(m => m.AddSurveyStatusPageModule)
  },
  {
    path: 'update-survey-status/:id',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator', 'Survey Manager'] },
    loadChildren: () => import('./pages/update-survey-status/update-survey-status.module').then(m => m.UpdateSurveyStatusPageModule)
  },
  {
    path: 'surveys',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator', 'Survey Manager', 'Respondent'] },
    loadChildren: () => import('./pages/surveys/surveys.module').then(m => m.SurveysPageModule)
  },
  {
    path: 'add-survey',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator', 'Survey Manager'] },
    loadChildren: () => import('./pages/add-survey/add-survey.module').then(m => m.AddSurveyPageModule)
  },
  {
    path: 'update-survey/:id',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator', 'Survey Manager'] },
    loadChildren: () => import('./pages/update-survey/update-survey.module').then(m => m.UpdateSurveyPageModule)
  },
  {
    path: 'question-types',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator', 'Survey Manager', 'Respondent'] },
    loadChildren: () => import('./pages/question-types/question-types.module').then(m => m.QuestionTypesPageModule)
  },
  {
    path: 'add-question-type',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator', 'Survey Manager'] },
    loadChildren: () => import('./pages/add-question-type/add-question-type.module').then(m => m.AddQuestionTypePageModule)
  },
  {
    path: 'update-question-type/:id',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator', 'Survey Manager'] },
    loadChildren: () => import('./pages/update-question-type/update-question-type.module').then(m => m.UpdateQuestionTypePageModule)
  },
  {
    path: 'questions',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator', 'Survey Manager', 'Respondent'] },
    loadChildren: () => import('./pages/questions/questions.module').then(m => m.QuestionsPageModule)
  },
  {
    path: 'add-question',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator', 'Survey Manager'] },
    loadChildren: () => import('./pages/add-question/add-question.module').then(m => m.AddQuestionPageModule)
  },
  {
    path: 'update-question/:id',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator', 'Survey Manager'] },
    loadChildren: () => import('./pages/update-question/update-question.module').then(m => m.UpdateQuestionPageModule)
  },
  {
    path: 'question-options',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator', 'Survey Manager', 'Respondent'] },
    loadChildren: () => import('./pages/question-options/question-options.module').then(m => m.QuestionOptionsPageModule)
  },
  {
    path: 'add-question-option',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator', 'Survey Manager'] },
    loadChildren: () => import('./pages/add-question-option/add-question-option.module').then(m => m.AddQuestionOptionPageModule)
  },
  {
    path: 'update-question-option/:id',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator', 'Survey Manager'] },
    loadChildren: () => import('./pages/update-question-option/update-question-option.module').then(m => m.UpdateQuestionOptionPageModule)
  },
  {
    path: 'system-users',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator', 'Survey Manager'] },
    loadChildren: () => import('./pages/system-users/system-users.module').then(m => m.SystemUsersPageModule)
  },
  {
    path: 'add-system-user',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator'] },
    loadChildren: () => import('./pages/add-system-user/add-system-user.module').then(m => m.AddSystemUserPageModule)
  },
  {
    path: 'update-system-user/:id',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator'] },
    loadChildren: () => import('./pages/update-system-user/update-system-user.module').then(m => m.UpdateSystemUserPageModule)
  },
  {
    path: 'roles',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator', 'Survey Manager'] },
    loadChildren: () => import('./pages/roles/roles.module').then(m => m.RolesPageModule)
  },
  {
    path: 'add-role',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator'] },
    loadChildren: () => import('./pages/add-role/add-role.module').then(m => m.AddRolePageModule)
  },
  {
    path: 'update-role/:id',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator'] },
    loadChildren: () => import('./pages/update-role/update-role.module').then(m => m.UpdateRolePageModule)
  },
  {
    path: 'system-user-roles',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator', 'Survey Manager'] },
    loadChildren: () => import('./pages/system-user-roles/system-user-roles.module').then(m => m.SystemUserRolesPageModule)
  },
  {
    path: 'add-system-user-role',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator'] },
    loadChildren: () => import('./pages/add-system-user-role/add-system-user-role.module').then(m => m.AddSystemUserRolePageModule)
  },
  {
    path: 'update-system-user-role/:id',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator'] },
    loadChildren: () => import('./pages/update-system-user-role/update-system-user-role.module').then(m => m.UpdateSystemUserRolePageModule)
  },
  {
    path: 'responses',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator', 'Survey Manager', 'Respondent'] },
    loadChildren: () => import('./pages/responses/responses.module').then(m => m.ResponsesPageModule)
  },
  {
    path: 'add-response',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator', 'Survey Manager', 'Respondent'] },
    loadChildren: () => import('./pages/add-response/add-response.module').then(m => m.AddResponsePageModule)
  },
  {
    path: 'update-response/:id',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator', 'Survey Manager', 'Respondent'] },
    loadChildren: () => import('./pages/update-response/update-response.module').then(m => m.UpdateResponsePageModule)
  },
  {
    path: 'answers',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator', 'Survey Manager', 'Respondent'] },
    loadChildren: () => import('./pages/answers/answers.module').then(m => m.AnswersPageModule)
  },
  {
    path: 'add-answer',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator', 'Survey Manager', 'Respondent'] },
    loadChildren: () => import('./pages/add-answer/add-answer.module').then(m => m.AddAnswerPageModule)
  },
  {
    path: 'update-answer/:id',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator', 'Survey Manager', 'Respondent'] },
    loadChildren: () => import('./pages/update-answer/update-answer.module').then(m => m.UpdateAnswerPageModule)
  },
  {
    path: 'answer-options',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator', 'Survey Manager', 'Respondent'] },
    loadChildren: () => import('./pages/answer-options/answer-options.module').then(m => m.AnswerOptionsPageModule)
  },
  {
    path: 'add-answer-option',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator', 'Survey Manager'] },
    loadChildren: () => import('./pages/add-answer-option/add-answer-option.module').then(m => m.AddAnswerOptionPageModule)
  },
  {
    path: 'update-answer-option/:id',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator', 'Survey Manager'] },
    loadChildren: () => import('./pages/update-answer-option/update-answer-option.module').then(m => m.UpdateAnswerOptionPageModule)
  },
  {
    path: 'edit-profile/:id',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['System Administrator', 'Survey Manager', 'Respondent'] },
    loadChildren: () => import('./pages/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module').then(m => m.SigninPageModule)
  },
  {
    path: 'unauthorized',
    loadChildren: () => import('./pages/unauthorized/unauthorized.module').then(m => m.UnauthorizedPageModule)
  },
  {
    path: 'forbidden',
    loadChildren: () => import('./pages/forbidden/forbidden.module').then(m => m.ForbiddenPageModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundPageModule)
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
