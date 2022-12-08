import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59005Page } from './s59005.page';

describe('S59005Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59005Page;
  let fixture: ComponentFixture<S59005Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59005Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59005Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
