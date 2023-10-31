import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S46019Page } from './s46019.page';

describe('S46019Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S46019Page;
  let fixture: ComponentFixture<S46019Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S46019Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S46019Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
