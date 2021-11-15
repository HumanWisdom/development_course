import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53256Page } from './s53256.page';

describe('S53256Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53256Page;
  let fixture: ComponentFixture<S53256Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53256Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53256Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
