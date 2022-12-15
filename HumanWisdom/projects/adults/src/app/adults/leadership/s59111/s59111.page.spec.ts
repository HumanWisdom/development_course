import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59111Page } from './s59111.page';

describe('S59111Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59111Page;
  let fixture: ComponentFixture<S59111Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59111Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59111Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
