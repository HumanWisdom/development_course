import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59024Page } from './s59024.page';

describe('S59024Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59024Page;
  let fixture: ComponentFixture<S59024Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59024Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59024Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
