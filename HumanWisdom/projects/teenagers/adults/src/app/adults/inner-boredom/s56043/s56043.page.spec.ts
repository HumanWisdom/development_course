import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S56043Page } from './s56043.page';

describe('S56043Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S56043Page;
  let fixture: ComponentFixture<S56043Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S56043Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S56043Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
