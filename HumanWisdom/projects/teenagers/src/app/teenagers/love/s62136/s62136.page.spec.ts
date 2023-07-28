import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62136Page } from './s62136.page';

describe('S62136Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62136Page;
  let fixture: ComponentFixture<S62136Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62136Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62136Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
