import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53022Page } from './s53022.page';

describe('S53022Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53022Page;
  let fixture: ComponentFixture<S53022Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53022Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53022Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
