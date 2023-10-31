import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S63074Page } from './s63074.page';

describe('S63074Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S63074Page;
  let fixture: ComponentFixture<S63074Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S63074Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S63074Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
