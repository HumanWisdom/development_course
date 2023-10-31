import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62062Page } from './s62062.page';

describe('S62062Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62062Page;
  let fixture: ComponentFixture<S62062Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62062Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62062Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
