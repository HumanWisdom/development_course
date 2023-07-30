import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S134065Page } from './s134065.page';

describe('S134065Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S134065Page;
  let fixture: ComponentFixture<S134065Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S134065Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S134065Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
