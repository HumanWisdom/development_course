import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S73019Page } from './s73019.page';

describe('S73019Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S73019Page;
  let fixture: ComponentFixture<S73019Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S73019Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S73019Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
