import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53212Page } from './s53212.page';

describe('S53212Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53212Page;
  let fixture: ComponentFixture<S53212Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53212Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53212Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
