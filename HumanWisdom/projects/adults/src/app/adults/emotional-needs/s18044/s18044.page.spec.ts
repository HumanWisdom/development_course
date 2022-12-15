import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S18044Page } from './s18044.page';

describe('S18044Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S18044Page;
  let fixture: ComponentFixture<S18044Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S18044Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S18044Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
