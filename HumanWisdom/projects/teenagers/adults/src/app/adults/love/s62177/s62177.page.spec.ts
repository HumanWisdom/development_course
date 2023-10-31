import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S62177Page } from './s62177.page';

describe('S62177Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S62177Page;
  let fixture: ComponentFixture<S62177Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S62177Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S62177Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
