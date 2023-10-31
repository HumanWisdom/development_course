import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62026Page } from './s62026.page';

describe('S62026Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62026Page;
  let fixture: ComponentFixture<S62026Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62026Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62026Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
