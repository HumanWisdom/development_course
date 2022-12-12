import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59072Page } from './s59072.page';

describe('S59072Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59072Page;
  let fixture: ComponentFixture<S59072Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59072Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59072Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
