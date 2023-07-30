import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134057Page } from './s134057.page';

describe('S134057Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134057Page;
  let fixture: ComponentFixture<S134057Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134057Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134057Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
