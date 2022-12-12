import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53243Page } from './s53243.page';

describe('S53243Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53243Page;
  let fixture: ComponentFixture<S53243Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53243Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53243Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
