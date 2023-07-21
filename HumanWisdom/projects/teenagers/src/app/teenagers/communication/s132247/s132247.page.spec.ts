import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S132247Page } from './s132247.page';

describe('S132247Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component:  S132247Page;
  let fixture: ComponentFixture<S132247Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S132247Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S132247Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
