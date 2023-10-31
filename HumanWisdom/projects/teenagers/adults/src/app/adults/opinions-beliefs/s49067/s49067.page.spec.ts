import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S49067Page } from './s49067.page';

describe('S49067Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S49067Page;
  let fixture: ComponentFixture<S49067Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S49067Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S49067Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
