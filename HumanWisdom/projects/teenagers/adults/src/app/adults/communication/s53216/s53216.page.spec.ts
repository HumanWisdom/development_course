import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53216Page } from './s53216.page';

describe('S53216Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53216Page;
  let fixture: ComponentFixture<S53216Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53216Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53216Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
