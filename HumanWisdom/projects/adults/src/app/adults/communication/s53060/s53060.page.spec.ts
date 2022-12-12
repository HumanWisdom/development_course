import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S53060Page } from './s53060.page';

describe('S53060Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S53060Page;
  let fixture: ComponentFixture<S53060Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S53060Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S53060Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
