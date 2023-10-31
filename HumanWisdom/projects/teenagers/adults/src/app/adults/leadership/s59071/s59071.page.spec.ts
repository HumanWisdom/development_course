import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59071Page } from './s59071.page';

describe('S59071Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59071Page;
  let fixture: ComponentFixture<S59071Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59071Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59071Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
