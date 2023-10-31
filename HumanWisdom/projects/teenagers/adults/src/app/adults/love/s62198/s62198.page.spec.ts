import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62198Page } from './s62198.page';

describe('S62198Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62198Page;
  let fixture: ComponentFixture<S62198Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62198Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62198Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
