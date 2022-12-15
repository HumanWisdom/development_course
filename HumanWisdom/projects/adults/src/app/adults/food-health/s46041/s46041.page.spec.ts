import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46041Page } from './s46041.page';

describe('S46041Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46041Page;
  let fixture: ComponentFixture<S46041Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46041Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46041Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
