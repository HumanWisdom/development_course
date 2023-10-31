import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S64023Page } from './s64023.page';

describe('S64023Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S64023Page;
  let fixture: ComponentFixture<S64023Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S64023Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S64023Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
