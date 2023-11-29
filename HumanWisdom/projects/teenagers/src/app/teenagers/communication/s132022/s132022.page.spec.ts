import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132022Page } from './s132022.page';

describe('S132022Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132022Page;
  let fixture: ComponentFixture<S132022Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132022Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132022Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
