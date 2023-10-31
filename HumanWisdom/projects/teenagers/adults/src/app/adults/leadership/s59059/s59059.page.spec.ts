import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { S59059Page } from './s59059.page';

describe('S59059Page', () => {
  // let  canActivate:[ActiveGuard],  
    let component: S59059Page;
  let fixture: ComponentFixture<S59059Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S59059Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(S59059Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
