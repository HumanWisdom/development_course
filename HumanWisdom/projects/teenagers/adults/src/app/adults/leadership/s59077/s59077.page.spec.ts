import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59077Page } from './s59077.page';

describe('S59077Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59077Page;
  let fixture: ComponentFixture<S59077Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59077Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59077Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
