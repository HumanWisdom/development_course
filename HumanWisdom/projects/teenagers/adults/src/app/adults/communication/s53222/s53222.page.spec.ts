import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53222Page } from './s53222.page';

describe('S53222Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53222Page;
  let fixture: ComponentFixture<S53222Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53222Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53222Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
