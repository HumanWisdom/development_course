import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53019Page } from './s53019.page';

describe('S53019Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53019Page;
  let fixture: ComponentFixture<S53019Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53019Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53019Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
